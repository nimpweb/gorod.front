import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { MdHelp, MdShowChart, MdAutoFixHigh } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose, AiOutlineUserAdd, AiFillCaretDown, AiTwotoneHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { CiLogin } from 'react-icons/ci';
import {BsGrid3X2Gap} from 'react-icons/bs';
import { ImHistory } from 'react-icons/im';
import { useMobile, useUser } from './../store';

const Header = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [profilePopup, setProfilePopup] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const { pathname } = useRouter();

    const router = useRouter();

    const { user, removeUser } = useUser((state) => state.user);

    const isAuthorizated = user ? true : false;


    React.useEffect(() => {
        setLoggedIn(true);
    }, []);

    const handleLogoutClick = (e: any) => {
        e.preventDefault();
        localStorage.removeItem(process.env.API_ACCESS_TOKEN);
        removeUser();
        router.push('/');
        setLoggedIn(false);
    };

    const handleClickMobileMenu = () => {
        setMobileMenu(prev => !prev);
    }

    const mobileLinkClassName = "font-semibold text-sm flex gap-1 items-center uppercase hover:text-slate-300 ease-in duration-100"

    return (
        <>
            <div className="flex bg-white rounded-br-2xl rounded-bl-2xl justify-between shadow-lg fixed w-full z-20 border-stone-600 h-[50px]">
                <Link href="/">
                    <img className="gap ml-1 w-[50px]" src="./logo.png" alt="logo" />
                </Link>
                <div className="hidden sm:flex gap-10 items-center mr-5 border-red-50">
                    {pathname !== '/' && (
                        <Link href="/">
                            <div className="font-semibold text-sm flex gap-1 items-center border-r pr-5 hover:text-slate-500 ease-in duration-100 text-blue-600">
                                <AiTwotoneHome /> Домой
                            </div>
                        </Link>
                    )}

                    <Link href="/tarif">
                        <div className="font-semibold text-sm flex gap-1 items-center border-r pr-5 hover:text-slate-500 ease-in duration-100">
                            <MdAutoFixHigh /> Тарифы
                        </div>
                    </Link>
                    <Link href="/limit">
                        <div className="font-semibold text-sm flex gap-1 items-center border-r pr-5 hover:text-slate-500 ease-in duration-100">
                            <MdShowChart /> Лимиты
                        </div>
                    </Link>
                    <Link href="/help">
                        <div className="font-semibold text-sm flex gap-1 items-center border-r pr-5 hover:text-slate-500 ease-in duration-100">
                            <MdHelp /> Помощь
                        </div>
                    </Link>
                    {!user && (
                        <Link href="/login">
                            <div className="font-semibold text-sm flex gap-1 items-center hover:text-slate-500 ease-in duration-100 text-blue-700">
                                <CiLogin /> Вход
                            </div>
                        </Link>
                    )}

                    {user && (
                        <div
                            className="relative font-semibold text-sm flex gap-1 items-center hover:text-slate-500 ease-in duration-100 cursor-pointer"
                            onClick={() => setProfilePopup(!profilePopup)}>
                            <AiOutlineUserAdd /> {user.displayName}&nbsp;&nbsp;
                            <AiFillCaretDown />
                            <div
                                className={`absolute ${
                                    !profilePopup && 'hidden'
                                } right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-7`}>
                                <div className="py-1" role="none">
                                    <Link legacyBehavior href="/profile">
                                        <a
                                            href="#"
                                            className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center"
                                            role="menuitem">
                                            <CgProfile /> Профиль
                                        </a>
                                    </Link>
                                    <Link legacyBehavior href="/bill">
                                        <a
                                            href="#"
                                            className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center"
                                            role="menuitem">
                                            <BsGrid3X2Gap /> Начисления
                                        </a>
                                    </Link>
                                    <Link legacyBehavior href="/bills">
                                        <a
                                            href="#"
                                            className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center"
                                            role="menuitem">
                                            <ImHistory /> История оплат
                                        </a>
                                    </Link>
                                    <a
                                        href="#"
                                        className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center"
                                        role="menuitem"
                                        onClick={handleLogoutClick}>
                                        <FiLogOut /> Выход
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div 
                    className="flex sm:hidden items-center justify-center px-5 cursor-pointer"
                    onClick={handleClickMobileMenu}
                >
                    { mobileMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
                </div>
            </div>

            { mobileMenu && (
                <div 
                    className="flex flex-col justify-between"
                >
                    { user && <p className="pt-[80px] z-[19] text-center">Здравствуйте, <span className="font-bold">{ user.displayName }</span></p> }
                    <div 
                        className="z-[18] absolute top-0 left-0 right-0 bottom-0 bg-white text-slate-500 flex flex-col gap-5 justify-center items-center w-full h-screen text-center ease-in-out duration-300 overflow-hidden"
                    >
                        <Link href="/tarif">
                            <div className={ mobileLinkClassName }>
                                <MdAutoFixHigh /> Тарифы
                            </div>
                        </Link>
                        <Link href="/limit">
                            <div className={mobileLinkClassName}>
                                <MdShowChart /> Лимиты
                            </div>
                        </Link>
                        <Link href="/help">
                            <div className={mobileLinkClassName}>
                                <MdHelp /> Помощь
                            </div>
                        </Link>

                        { isAuthorizated && (
                            <>
                            <span className="bg-slate-300 h-[1px] w-full lg:w-1/4"></span>
                            <Link legacyBehavior href="/profile">
                                <a
                                    href="#"
                                    className={mobileLinkClassName}
                                    role="menuitem">
                                    <CgProfile /> Профиль
                                </a>
                            </Link>
                            <Link legacyBehavior href="/bill">
                                <a
                                    href="#"
                                    className={mobileLinkClassName}
                                    role="menuitem">
                                    <BsGrid3X2Gap /> Начисления
                                </a>
                            </Link>
                            <Link legacyBehavior href="/bills">
                                <a
                                    href="#"
                                    className={mobileLinkClassName}
                                    role="menuitem">
                                    <ImHistory /> История оплат
                                </a>
                            </Link>
                        
                            </>
                        ) }

                        <span className="bg-slate-300 h-[1px] w-full lg:w-1/4"></span>

                        
                        { isAuthorizated 
                        ?   (
                            <Link legacyBehavior href="/logout">
                                <a
                                    href="#"
                                    className={mobileLinkClassName}
                                    role="menuitem"
                                    onClick={handleLogoutClick}>
                                    <FiLogOut /> Выход
                                </a>
                            </Link>
                            )
                        : (

                            <Link href="/login">
                                <div className="font-semibold text-sm flex gap-1 items-center hover:text-slate-500 ease-in duration-100 text-blue-700">
                                    <CiLogin /> Вход
                                </div>
                                </Link>
                        )}

                    </div>
                </div>

            ) }
        </>
    );
};

export default Header