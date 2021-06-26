import React from 'react'
import './Sidebar.css'

// React icons
import { AiFillHome } from 'react-icons/ai';
import { FaBox } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <AiFillHome style={{ marginRight: '5px' }}/>
                            Home
                        </li>
                        <li className='sidebarListItem'>
                            <FaBox style={{ marginRight: '5px' }}/>
                            Products
                        </li>
                        <li className='sidebarListItem'>
                            <GiMagnifyingGlass style={{ marginRight: '5px' }}/>
                            Explore
                        </li>
                        <li className='sidebarListItem'>
                            <MdPermContactCalendar style={{ marginRight: '5px' }}/>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
