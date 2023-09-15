import logo from '../images/logo.png'

const Header = () => {
    
    return (
        <>
           <div>
                <div className='flex justify-center p-4'>
                    <img className='w-96 ' src={logo} alt="" />
                </div>
                <nav className='bg-black  text-white flex gap-5 md:pl-10'>
                   <a className='hover:bg-slate-400 p-3' href="/shop">Shop</a>
                   <a className='hover:bg-slate-400 p-3' href="/order">Order  Review</a>
                   <a className='hover:bg-slate-400 p-3' href="/manage"> Manage Inventory here</a>
                </nav>
           </div>
        </>
    );
};

export default Header;