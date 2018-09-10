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


const source$  = Observable.from(['Jone', 'Tom', 'Shawn'])
      .map(v => v.toUpperCase())
      .map(v => `I am ${v}`)

source$.subscribe(
  v => console.log(v)
)
