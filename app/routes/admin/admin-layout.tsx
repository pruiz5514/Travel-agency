import {SidebarComponent} from "@syncfusion/ej2-react-navigations"
import { MobileSidebar, NavItems } from "components"
import { Outlet } from "react-router"

function AdminLayout() {
  return (
    <div className='admin-layout'>
        <MobileSidebar/>
        <aside className='w-full max-w-67.5 hidden lg:block'>
            <SidebarComponent>
                <NavItems/>
            </SidebarComponent>
        </aside>
        <Outlet />
    </div>
  )
}

export default AdminLayout