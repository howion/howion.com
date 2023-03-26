// 'use client'

import React, { useRef } from 'react'
import { useDidMount } from 'rooks'
// import p5 from 'p5'

// if (typeof window !== 'undefined') {
//     // @ts-ignore mutate windows
//     window.p5 = p5
// }

// class Branch {
//     protected _p5: p5
//     protected x: number
//     protected y: number
//     protected prevX: number
//     protected prevY: number
//     protected visible: boolean
//     protected color: p5.Color
//     protected speed: { x: number, y: number }

//     constructor(x: number, y: number, _p5: p5) {
//         this._p5 = _p5
//         this.x = x
//         this.y = y
//         this.prevX = x
//         this.prevY = y
//         this.visible = true
//         this.color = _p5.color(_p5.random(110, 110 + 100), 70, 100, 100)
//         this.speed = {
//             x: _p5.random(-7, 7),
//             y: _p5.random(-7, 7)
//         }
//     }

//     walls() {
//         this.prevX = this.x
//         this.prevY = this.y

//         if (this.x < 0 || this.x > this._p5.width || this.y < 0 || this.y > this._p5.height) {
//             this.visible = false
//         }
//     }

//     draw() {
//         this._p5.line(this.prevX, this.prevY, this.x, this.y)
//     }

//     // moveStraight() {
//     //     this.x += this.speed.x * 5
//     //     this.y += this.speed.y * 5
//     // }

//     // moveRandom() {
//     //     this.speed.x += this._p5.random(-10, 10)
//     //     this.speed.y += this._p5.random(-10, 10)
//     //     this.x += this.speed.x
//     //     this.y += this.speed.y
//     // }

//     moveNoise() {
//         this.speed.x += p.simplex3(this.x * 0.005, this.y * 0.005, this._p5.millis() * 0.0001) * 2
//         this.speed.y += p.simplex3(this.y * 0.005, this.x * 0.005, this._p5.millis() * 0.0001) * 2
//         this.x += this.speed.x
//         this.y += this.speed.y
//     }
// }

export default function HomeCanvas(): FCReturn {
    // const canvasParentRef = useRef<HTMLDivElement>(null)
    // const didMount = useRef(false)

    // function computeBounds(): { w: number, h: number } {
    //     return {
    //         w: canvasParentRef.current!.offsetWidth,
    //         h: canvasParentRef.current!.offsetHeight
    //     }
    // }

    // function draw(sketch: p5) {
    //     sketch.background(0)
    //     sketch.ellipse(100, 100, 500, 500)
    // }

    // useDidMount(() => {
    //     if (didMount.current) return
    //     didMount.current = true

    //     const { w, h } = computeBounds()

    //     new p5(sketch => {
    //         sketch.setup = () => {
    //             sketch.createCanvas(w, h).parent(canvasParentRef.current!)
    //         }
    //         sketch.draw = () => draw(sketch)

    //     })
    // })

    return (
        <></>
        // <div ref={canvasParentRef} className="m-home-header-canvas" />
    )
}
