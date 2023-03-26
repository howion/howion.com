import React from 'react'
import { Emblem } from './emblem'
import { useService } from '/hooks/use-service'
import { TransitorService } from '/services/transitor.service'

export function Transitor(): FCReturn {
    const isActive = useService<boolean>(TransitorService, false)

    return (
        <div
            id="m-transitor"
            className={isActive ? 'active' : undefined}
            // onClick={() => isActive ? TransitorService.hideTransitor(0) : TransitorService.showTransitor()}
        >
            <Emblem />
            <div className="m-transitor-tile" />
            <div className="m-transitor-tile" />
            <div className="m-transitor-tile" />
            <div className="m-transitor-tile" />
            <div className="m-transitor-tile" />
        </div>
    )
}
