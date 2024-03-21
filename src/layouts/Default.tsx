import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Default() {
    return(
        
        <div className="layout">
            <Header />

            <div>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}