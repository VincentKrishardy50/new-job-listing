import { useState } from "react";
import { jsonData } from "../data/data";
import Header from "../components/header";
import JobList from "../components/job_list";
import Pagination from "../components/pagination";

export default function Job(){
    const [currPage, setCurrPage] = useState(1);
    const itemsPerPage = 5;

    function getPagination(){
        let pages = []
        for (let i = 0; i<jsonData.length/itemsPerPage; i++){
            pages.push(i+1);
        }
        return pages;
    }

    function getDataPaging(page){
        return jsonData.slice((page-1)*itemsPerPage, (page*itemsPerPage))
    }

    const handlePaging = (e) => {
    let page = e.target.textContent;
    let prevButtonContent = document.getElementById(currPage-1);
    prevButtonContent.className = 'mx-1 px-6 py-4 rounded shadow text-blue-500 bg-white'
    let buttonContent = document.getElementById(e.target.id);
    buttonContent.className = 'mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold'
    setCurrPage(page);
    }

    return(
        <>
        <Header/>
        <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
            <div className="max-w-5xl m-auto relative top-8 ">
            <div>
                <JobList dataPaging={getDataPaging(currPage)}/>
            </div>
            <nav className="my-4">
                <Pagination pagination={getPagination()} handlePaging={handlePaging}/>
            </nav>
            </div>
        </main>
        </>
    )
}