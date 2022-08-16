import './help.css'
import help1 from '../images/help1.PNG'
import help2 from '../images/help2.png'
import help3 from '../images/help3.png'

const Help = () => {
    return (
        <>
            <div className="row container top-help">
                <div className="col-md-8 container mt-2  mb-2 ">
                    This section is aimed at giving you helpful information on how to use this platform for the best experience. Here, you'll find guidiance on how to do anything on the app. If you can't get help with what you want, please do write us through the contact secton so we get it sorted out.
                </div>

            </div>
            <div className='search-quest mt-4 p-4'>Searching for questions</div>
            <div className="mb-4 p-3">You can search for questions through the filter section in a few steps.</div>
            <div className=" help-sec">

                <div className="help-intro itm mt-4 w-80 bg"><b>Step 1 :</b> Select the exam category from the top of the filter section</div>
                <img src={help1} alt='' className='itm col-md-8 col-10' />
                <div className="help-intro itm mt-4 w-80"><b>Step 2 :</b> Choose the subject or course you want.</div>
                <img src={help2} alt='' className='itm col-md-8 col-10' />
                <div className="help-intro itm mt-4 w-80"><b>Step 3 :</b> Select year, difficulty and topic</div>
                <img src={help3} alt='' className='itm col-md-8 col-10 pt-2' />
            </div>
        </>
    );
}

export default Help;