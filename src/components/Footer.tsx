import facebookImg from "../assets/iconFacebook.png"
import tiktokImg from "../assets/iconTiktok.png"
import instagramImg from "../assets/iconInstagram.png"
export function Footer(){
  return(
    <>
    <div className="grid justify-center mt-10 mb-5 gap-3">
      <p className="text-2xl">Cuide de seus bichinhos!</p>
      <p className="text-lg text-center">Sigam nossas redes sociais:</p>
      </div>
      <div className="flex justify-center gap-10">
      <img src={facebookImg} alt="" />
      <img src={tiktokImg} alt="" />
      <img src={instagramImg} alt="" />
    </div>
    </>
  )
}