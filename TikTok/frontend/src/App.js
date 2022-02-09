import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Video from './components/Video'
import UserData from './components/form/UserData'
import Header from './components/Header'
import axios from './components/axios'
function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/v2/posts')
      setVideos(res.data)
      return res
    }
    fetchData()
  }, [])

  console.log(videos)

  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <UserData />
          </Route>
          <Route path="/">
            <div className="app__videos">
              {videos.map(
                ({
                  url,
                  channel,
                  description,
                  song,
                  likes,
                  shares,
                  messages,
                }) => (
                  <Video
                    url={url}
                    channel={channel}
                    description={description}
                    song={song}
                    likes={likes}
                    shares={shares}
                    messages={messages}
                  />
                ),
              )}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
