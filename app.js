
{/*infoBlock component*/}

function InfoBlock({ title, description, link }) {

    return (

            <div className="bg-white  p-4 rounded rounded-sm shadow">
                <h1 className="text-2xl">{title}</h1>
                <p>{description}</p>
                <a href={link}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 ">Learn More</button>
                </a>
            </div>
              

    );
}

//linkButton component

function linkButton(text, url) {
    return (
        <a href={url} className="text-white">{text}</a>
    );
}




function App() {
    const [showNav, setShowNav] = React.useState(false);
  return (
    
    
    <div>
      <h1 className="text-4xl font-bold  text-white text-center p-4">
        OAKWOOD UNIVERSITY
      </h1>

     
         {/* Navigation Bar */}

        <div className="w-full shadow p-4 flex gap-4">
        <button className="text-white" onClick={() => setShowNav(true)}>Our Story&#9660; </button>

        {/*Suppose to be a dropdown nav*/}

        {showNav && (
            <div className="absolute z-10 mt-2 w-56 rounded-md bg-gray-800 shadow-lg">
            <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Our Mission</a>
            <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">History</a>
            <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Leadership</a>
            <a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Accreditation</a>

             <button className="text-white" onClick={setShowNav(false)}>Close</button>

             </div>
        )}
        {showNav &&(console.log("Navigation is shown"))}


        <a className="text-white">Admissions&#9660; </a>
        <a className="text-white">Academic Experience&#9660;</a>
        <a className="text-white">Life at Oakwood&#9660;</a>
        <a className="text-white">Financing Oakwood&#9660;</a>
        <a className="text-white">Alumni&#9660;</a>
        <a className="text-white">Quick Links&#9660;</a>
        <a className="text-white">OU Access&#9660;</a>
        <a className="text-white">NewsRoom&#9660;</a>
        <a className="text-white">Resources&#9660;</a>
        </div>

        {/* Main Content Section */}

        <div className="bg-white text-blue-500 p-4 rounded m-4 ">
            <h1 className="text-3xl">Why Oakwood</h1>
            <h2 classNmae="text-2xl"></h2>
            <p>Oakwood University is a private, historically black Seventh-day Adventist university in Huntsville, Alabama. Founded in 1896, Oakwood offers a variety of undergraduate and graduate programs, emphasizing a holistic approach to education that integrates faith, learning, and service. The university is known for its strong sense of community, commitment to academic excellence, and dedication to preparing students for leadership roles in their professions and communities.</p>

        </div>
        

        {/*Render the infoBlock component*/}
        <div className="grid grid-flow-row-dense grid-cols-3 gap-4 p-4">

            <InfoBlock title="Oakwood University Announces Holiday Closure Schedule for Thanksgiving, Christmas, and New Year’s" 
            description="Nov 20, 2025 | Latest News" 
            link="https://oakwood.edu/oakwood-university-announces-holiday-closure-schedule-for-thanksgiving-christmas-and-new-years/" />

            <InfoBlock title="Oakwood University Announces the Selection of Its 12th President" 
            description="Mar 28, 2025 | Latest News, Newsroom, Official Statements" 
            link="https://oakwood.edu/oakwood-university-announces-the-selection-of-its-12th-president/" />

            <InfoBlock
          title="Oakwood Selects 12th President"
          description="Mar 28, 2025 | Official Statements"
          link="https://oakwood.edu/oakwood-university-announces-the-selection-of-its-12th-president/" />

        </div>


        {/* Footer Section */}
        <footer className="g-gray-800 text-white text-center p-4 mt-auto bg-gray-800">
            < table class="table-auto mx-auto">
            <tr>
            <td>{linkButton("CONTACT US","https://oakwood.edu/contact-us/")}</td>
            <td>{linkButton("CAREERS","https://oakwood.edu/careers/")}</td>
            </tr>
            <tr>
            <td>{linkButton("BOOKSTORE","https://oakwood.bncollege.com/")}</td>
            <td>{linkButton("TERMS OF USE","https://oakwood.edu/terms-of-use/")}</td>
            </tr>
            <tr>
            <td>{linkButton("PRIVACY POLICY","https://oakwood.edu/privacy-policy/")}</td>
            </tr>
            </table>

        <address>7000 Adventist Blvd NW, Huntsville, AL 35896</address>
        </footer>


    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
