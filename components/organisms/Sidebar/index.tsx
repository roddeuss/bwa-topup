import Footer from "../Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SidebarProps {
    activeMenu:  'overview' | 'transactions' | 'settings'
}
export default function Sidebar(props: SidebarProps) { 
    const {activeMenu} = props;
  return (
    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                <MenuItem  icon="ic-menu-overview" title="Overview" active={activeMenu === 'overview'} href="/"/>
                <MenuItem  icon="ic-menu-transactions" title="Transactions" active={activeMenu === 'transactions'} href="/member/transactions"/>
                <MenuItem  icon="ic-menu-messages" title="Messages" href="/member" />
                <MenuItem  icon="ic-menu-card" title="Card" href="/member" />
                <MenuItem  icon="ic-menu-rewards" title="Rewards" href="/member" />
                <MenuItem  icon="ic-menu-setting" title="Settings" active={activeMenu === 'settings'} href="/member/edit-profile"/>
                <MenuItem  icon="ic-menu-logout" title="Log Out" href="/sign-in" />
                </div>
                <Footer />
            </div>
        </section>
  )
}
