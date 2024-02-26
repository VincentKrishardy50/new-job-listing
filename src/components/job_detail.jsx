export default function JobDetail({data}){
    return(
        <>
            <div className="flex items-center mb-4 mt-8">
                <img src={data.logo} className="w-12 h-12 mr-4" alt="Company Logo" />
                <div>
                <h1 className="text-xl font-semibold text-gray-800">{data.position}</h1>
                <p className="text-[#787878]">{data.company}</p>
                </div>
            </div>
            <div className="flex items-center">
            {(data.new === true) && <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                NEW!
                </span>}
                {(data.featured == true) && <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                FEATURED
                </span>}
            </div>
            <hr className="my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <h2 className="text-lg font-semibold mb-2">Job Description</h2>
                <p className="text-[#787878]">{data.description}</p>
                </div>
                <div>
                <h2 className="text-lg font-semibold mb-2">Requirements</h2>
                <div className="flex flex-wrap">
                    <span className="bg-[#0f1e32] text-white py-1 px-2 rounded-full mr-2 mb-2">
                    {data.level}
                    </span>
                    {data.languages.map((lang, index) => (
                        <span key={index} className="bg-[#eac77d] text-white py-1 px-2 rounded-full mr-2 mb-2">
                        {lang}
                    </span>
                    ))}
                    {data.tools.map((tool, index) => (
                        <span key={index} className="bg-[#eac77d] text-white py-1 px-2 rounded-full mr-2 mb-2">
                        {tool}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center text-gray-600">
                <p className="mr-4">{data.postedAt}</p>
                <p className="mr-4">{data.contract}</p>
                <p>{data.location}</p>
            </div>
        </>
    )
}