
import UserInput from './userInput'

type TInputField = {
  id: number,
  htmlFor: string;
  name: string;
  placeholder: string;
  type: string;
  title: string;
}


const Contact = () => {

const inputFields: TInputField[] = [
  {
    id: 1,
    htmlFor: 'fName',
    name: 'fName',
    placeholder: 'e. g. George',
    type: 'text',
    title: 'First Name'
  },
  {
    id: 2,
    htmlFor: 'lName',
    name: 'lName',
    placeholder: 'e. g. Michael',
    type: 'text',
    title: "Last Name"
  },
  {
    id: 3,
    htmlFor: 'email',
    name: 'email',
    placeholder: 'yourname@example.com',
    type: 'email',
    title: 'Email'

  }
]



  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg mx-auto py-24 p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            className="text-4xl 
                    font-bold border-b-4 border-gray-500 inline"
          >
            Contact
          </p>
        </div>

        <div>
          <form onSubmit={() => console.log("hello")} action="">
            <div>

              <div className="py-12">
    ``         Share your contact information below, and let's work together!
              </div>
              
              <div>
              {inputFields.map( ({id, htmlFor, name, placeholder, type, title}) => {
               return <UserInput id={id} htmlFor={htmlFor} name={name} placeholder={placeholder} type={type} title={title} />
              })}
              </div>

              <button>  submit  </button>


            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
