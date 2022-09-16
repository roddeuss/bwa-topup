import Footer from "../Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

export default function Sidebar() {
  return (
    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                <MenuItem  icon="ic-menu-overview" title="Overview" active/>
                <MenuItem  icon="ic-menu-transactions" title="Transactions" />
                <MenuItem  icon="ic-menu-messages" title="Messages" />
                <MenuItem  icon="ic-menu-card" title="Card" />
                <MenuItem  icon="ic-menu-rewards" title="Rewards" />
                <MenuItem  icon="ic-menu-setting" title="Settings" />
                <MenuItem  icon="ic-menu-logout" title="Log Out" />
                </div>
                <Footer />
            </div>
        </section>
  )
}
