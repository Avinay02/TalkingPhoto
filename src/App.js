import React, {useState} from 'react'
import UploadPhoto from './components/PhotoUpload'
import TextInput from './components/TextInput'
import TalkingAvatar from './components/TalkingAvatar'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [text, setText] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Handle image upload
  const handleImageUpload = file => {
    setImage(file)
  }

  // Handle text input
  const handleTextInput = inputText => {
    setText(inputText)
  }

  // Handle avatar generation
  const generateAvatar = async () => {
    if (!image || !text) {
      alert('Please upload a photo and enter text.')
      return
    }

    setLoading(true)
    setError('')
    const formData = new FormData()
    formData.append('image', image)
    formData.append('text', text)

    try {
      const response = await fetch(
        'http://localhost:5000/api/generate-avatar',
        {
          method: 'POST',
          body: formData,
        },
      )

      const data = await response.json()

      if (data.success) {
        setAvatarUrl(data.avatarUrl)
      } else {
        setError('Failed to generate avatar.')
      }
    } catch (err) {
      setError('Error communicating with the server.')
    }

    setLoading(false)
  }

  return (
    <div className="App">
      <h1>Talking Photo Application</h1>
      <UploadPhoto onImageUpload={handleImageUpload} />
      <TextInput onTextInput={handleTextInput} />
      <button onClick={generateAvatar} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Avatar'}
      </button>
      {error && <p className="error">{error}</p>}
      {avatarUrl && <TalkingAvatar avatarUrl={avatarUrl} />}
    </div>
  )
}

export default App
