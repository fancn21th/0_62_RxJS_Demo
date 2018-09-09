import { Observable } from 'rxjs'
import $ from 'jquery'

const myPromise = new Promise((resovle, reject) => {
  console.log('Creating promise')
  setTimeout(() => {
    resovle('Hello from promise')
  }, 3000)
})

// myPromise.then(x => console.log(x))

const source$ = Observable.fromPromise(myPromise)

source$.subscribe(
  x => console.log(x)
)

const getUser = username => $.ajax({
  url: `https://api.github.com/users/${username}`,
  dataType: 'jsonp'
}).promise()

Observable
  .fromPromise(getUser('fancn21th'))
  .subscribe(
    x => console.log(x)
  )
