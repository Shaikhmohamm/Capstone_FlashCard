

const Sidebar = ({ terminfo, active, setActive }) => {
 

  return (
    <div className="md:w-1/6 mt-5 bg-white p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Flash Cards</h2>
      <hr className='border border-slate-200 mb-2' />
      <ul>
        {terminfo.map((term, index) => (
          <li
            onClick={() => setActive(index)}
            className={`cursor-pointer hover:text-red-500 rounded-lg py-1 px-2 mb-2 
            ${active === index ? 'text-red-500 font-bold' : ''}`}
          >
            {term.termname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
