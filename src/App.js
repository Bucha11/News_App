import { useEffect, useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { News } from './Components/Main/News/News'

function App() {
    const [newsArray, setNewsArray] = useState([])

    const downloadNews = () => {
        fetch(
            'https://gnews.io/api/v4/top-headlines?&token=c267d24070982f5469da46bf61715e36&country=ru'
        )
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                setNewsArray((prev) => [...prev, ...data.articles])
            })
    }

    const scrolling = () => {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect()
            .bottom
        if (windowRelativeBottom < document.documentElement.clientHeight + 1) {
            downloadNews()
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrolling)
        window.addEventListener('touchmove', scrolling)
    }, [])
    useEffect(() => {
        downloadNews()
    }, [])

    let { pathname } = useLocation()
    let index = pathname.slice(1)

    return (
        <div className="App">
            <Header />
            <div>
                <Route exact path="/">
                    <Main newsArray={newsArray} />
                </Route>
                <Route path="/:index">
                    <News newsArray={newsArray[index]} />
                </Route>
            </div>
        </div>
    )
}

export default App
