export default function Pagination({pagination, handlePaging}){
    return(
        <ul className="flex justify-center">
                {
                pagination.map((page, index) => (
                    <li  key={index}>
                        {(page === 1) ? 
                        <button id={index} className='mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold' onClick={handlePaging}>
                            {page}
                        </button>:
                        <button id={index} className='mx-1 px-6 py-4 rounded shadow  text-blue-500 bg-white' onClick={handlePaging}>
                        {page}
                        </button>}
                        
                    </li>
                ))
                }
        </ul>
    )
}