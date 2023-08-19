
import {Route,Routes} from "react-router-dom"
import Contacts from "./Contacts"
//import Dashboard from "./Dashboard"
import ContactForm from "../components/ContactForm"
import EditContact from "../components/EditContact"
const AllRoutes=()=>{


    return(
        <Routes >
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
        </Routes>
    )
}

export default AllRoutes