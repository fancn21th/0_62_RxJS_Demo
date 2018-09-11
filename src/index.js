import { Observable } from 'rxjs'
import $ from 'jquery'

// interval, timer, range

// const source$ = Observable
//                 .interval(100)
//                 .take(4)
//
// source$.subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   complete => console.log('completed')
// )

// starting untill 4000 millsecs
// const source$ = Observable
//                 .timer(4000, 1000)
//                 .take(4)
//
// source$.subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   complete => console.log('completed')
// )

const source$ = Observable.range(0, 5)

source$.subscribe(
  x => console.log(x),
  err => console.log(err),
  complete => console.log('completed')
)
