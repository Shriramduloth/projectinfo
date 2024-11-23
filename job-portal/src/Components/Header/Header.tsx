import { Avatar, Indicator, NavLink } from '@mantine/core';
import { IconBriefcase, IconBell, IconSettings } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import { useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
const Header = () => {
    const location=useLocation();
    return location.pathname!="/signup" && location.pathname!="/login"?<div className="w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center font-['poppins']" >
        <div className="flex gap-3 items-center text-bright-sun-400">
            <IconBriefcase className="h-10 w-10 stroke={1.25}" />
            <div className="text-3xl font-semibold">Workfolio</div>

        </div>
        {NavLinks()}
        <div className="flex items-center gap-3">
            
            <ProfileMenu/>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5} />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="brightsun.5" offset={6} size={8} processing>
                    <IconBell stroke={1.5} />
                </Indicator >
            </div>
        </div>
    </div>:<></>
}
export default Header;