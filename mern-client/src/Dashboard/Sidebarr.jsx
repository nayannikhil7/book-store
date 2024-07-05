import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebarr = () => {
    return (
        <Sidebar aria-label="Sidebar with logo branding example">
            <Link to='/' className="text-2xl font-bold text-blue-700  items-center gap-2"> <Sidebar.Logo  ><FaBlog className='inline-block ' />
                Books
            </Sidebar.Logo></Link>
            <Sidebar.Logo href="#" img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" imgAlt="Flowbite logo">
                Flowbite
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        UploadBooks
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="/logout" icon={HiTable}>
                        Log Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default Sidebarr