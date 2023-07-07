import React, { useState,useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import destination from '../Data/Article.json'

const DetailPage = () => {
    const [place, setPlace] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setPlace(destination.posts.find((val) => val.id == id));
      }, []);
  return (
    <div>
      <Navbar />
      <div className="py-28 w-full px-56 max-sm:py-10 max-sm:px-6">
        <div className="flex flex-row w-full items-center gap-2 mb-4">
          <button onClick={() => navigate(-1)} className="bg-[#F7F8FB] w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <h5 className="subHeading">Back To Homepage</h5>
          </button>
          
        </div>
        <div className="flex w-full flex-col mb-10">
          <h5 className="subheading mb-2">Search Result</h5>
          <h3 className="heading2">{place?.title || "loading"}</h3>
        </div>
        <div className="flex flex-row gap-6 max-sm:flex-col">
          <div className="flex w-full flex-col">
            <div className="flex flex-col mb-10">
              <h5 className="heading4 mb-2">About</h5>
              <p className="subtitle1">
                {place?.desc}
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="heading4 mb-2">Etymology</h5>
              <p className="subtitle1">
                There are a number of theories as to the origin of the Latin
                name Florentia from which the name of Florence and Firenze
                derived:
                <br />- Legend attributes the origin of the name Florentia to
                Florio (a soldier killed on the spot)
                <br />- It may be related to the Latin word for flowers found in
                the area
                <br />- It may be related to Flora, since it was founded during
                the Floralia festival
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage