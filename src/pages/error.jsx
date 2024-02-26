import { Link } from "react-router-dom";
import error_images from "../assets/images/error_image.svg"


export default function Error(){
    return(
        <>
            <div class="container">
                <img className="ops" src={error_images}/>
                <br />
                <h3>Halaman yang Anda cari tidak ditemukan.
                <br /> Bisa jadi karena url tersebut salah atau tidak tersedia.</h3>
                <br />
                <Link className="buton" to="..">Kembali</Link>
            </div>
        </>
    
    )
}