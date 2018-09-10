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
Observable.of('Hello')
          .mergeMap(v => {
              return Observable.of(`${v} Everyone`)
          })
          .subscribe(v => console.log(v))

/* switch map */
