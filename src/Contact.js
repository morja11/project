// import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

const Contact = (zoom) => {
    return (
        <>
            <div className="container">
                <div className="card" >



                    <video autoPlay muted loop src={zoom.vidio}></video>
                    <div className="bu">
                        <h1>{zoom.name} </h1><hr width="100%"></hr>
                        <div className="rate" >
                            <span>{zoom.Rating}</span>
                            <button > {zoom.email}</button>
                        </div>
                        {/* <StarBorderPurple500Outlined/> */}
                    </div>

                </div>





            </div>
        </>
    )
}
export default Contact;