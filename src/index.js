import { Observable } from 'rxjs'
import $ from 'jquery'

/* merge map */

// wrong way
// Observable.of('Hello')
//           .subscribe(v => {
//               Observable.of(`${v} Everyone`)
//                         .subscribe(x => console.log(x))
//           })

// right way
// Observable.of('Hello')
//           .mergeMap(v => {
//               return Observable.of(`${v} Everyone`)
//           })
//           .subscribe(v => console.log(v))

/* switch map */

const getUser = username => $.ajax({
  url: `https://api.github.com/users/${username}`,
  dataType: 'jsonp'
}).promise()

const inputSource$ = Observable.fromEvent($('#input'), 'keyup')
                               .map(e => e.target.value)
                               .switchMap(v => Observable.fromPromise(getUser(v)))
                               .map(data => data.data)

inputSource$.subscribe(data => {
  $('#name').text(data.name)
})
