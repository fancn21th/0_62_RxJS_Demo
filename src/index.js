import { Observable } from 'rxjs'
import $ from 'jquery'

/* merge */

/* common syntax */

// Observable.of('Hello')
//           .merge(Observable.of('Everyone'))
//           .subscribe(v => console.log(v))
//
// Observable.interval(2000)
//           .merge(Observable.interval('500'))
//           .take(25)
//           .subscribe(v => console.log(v))

/* short syntax */

// const source1$ = Observable.interval(2000).map(v => `Merge 1 : ${v}`)
// const source2$ = Observable.interval(200).map(v => `Merge 2 : ${v}`)
//
// Observable.merge(source1$, source2$).take(25).subscribe(v => console.log(v))


/* concat */

const source1$ = Observable.range(0, 5).map(v => `Source 1 : ${v}`)
const source2$ = Observable.range(6, 5).map(v => `Source 2 : ${v}`)

Observable.concat(source1$, source2$).subscribe(v => console.log(v))
