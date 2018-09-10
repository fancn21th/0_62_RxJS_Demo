import { Observable } from 'rxjs'
import $ from 'jquery'

/* map */
// const source$ = Observable
//                   .interval(1000)
//                   .take(5)
//                   .map(v => v * v)
//
// source$.subscribe(
//   v => console.log(v)
// )

/* map * 2 */
// const source$  = Observable.from(['Jone', 'Tom', 'Shawn'])
//       .map(v => v.toUpperCase())
//       .map(v => `I am ${v}`)
//
// source$.subscribe(
//   v => console.log(v)
// )

/* map * 2 */
// const getGithubUser = username => $.ajax({
//   url: `https://api.github.com/users/${username}`,
//   dateType: 'jsonp'
// }).promise()
//
// Observable.fromPromise(getGithubUser('fancn21th'))
//   .map(user => user.name)
//   .subscribe(
//     v => console.log(v)
//   )

/* pluck */

const users = [
  {
    name: 'Will',
    age: '34'
  },
  {
    name: 'Mike',
    age: '37'
  },
  {
    name: 'Tony',
    age: '36'
  },
]

const users$ = Observable.from(users).pluck('name')

users$.subscribe(
  v => console.log(v)
)
