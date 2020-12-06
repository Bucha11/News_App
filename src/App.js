import { useEffect, useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { News } from './Components/Main/News/News'

function App() {
    const [newsArray, setNewsArray] = useState([])
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const downloadNews = () => {
        fetch(
            `${proxyUrl}https://newsapi.org/v2/top-headlines?country=ru&apiKey=9b1c85f042e54f2999825352ed0779f3`
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setNewsArray((prev) => [...prev, ...data.articles])
            })
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect()
                .bottom
            if (
                windowRelativeBottom <
                document.documentElement.clientHeight + 1
            ) {
                downloadNews()
            }
        })
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
