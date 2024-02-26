import { Link, useNavigate, useParams } from "react-router-dom";
import { jsonData } from "../data/data";
import Header from "../components/header";
import JobDetail from "../components/job_detail";




export default function Details(){
    const navigate = useNavigate();

    function setAlert(e){
        alert("Thank You for your application");
        window.scrollTo(0, 0);
        navigate('..');
    }
    return(
        <>
            <Header/>
            <div className="min-h-[80vh] relative">
                <div className="min-h-[80vh] bg-white rounded-lg shadow-lg p-10">
                    <Link to="..">
                        <button className="absolute top-0 left-0 mt-4 ml-4 bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md">
                            Back
                        </button>
                    </Link>
                    <JobDetail data={jsonData[useParams().id-1]}/>
                    <div className="flex justify-center mt-8">
                        <button className="bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md" onClick={setAlert}>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}