import react, { Component } from 'react'
class ClassAPI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      episodes: [],
    }
  }

  async componentDidMount() {
    const url = 'https://finalspaceapi.com/api/v0/episode/'
    const res = await fetch(url)
    const episodes = await res.json()
    this.setState({ episodes })
  }

  render() {
    const { episodes } = this.state
    return (
      <>
        <h1>Episode's List</h1>
        {episodes &&
          episodes.length &&
          episodes.map((item) => {
            return (
              <>
                <img src={item.img_url} />
                <div class="info">
                  <span class="number">{item.air_date}</span>
                  <h3 class="name">{item.writer}</h3>
                </div>
              </>
            )
          })}
      </>
    )
  }
}

export default ClassAPI
