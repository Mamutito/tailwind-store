const Sidebar = ({ children, isOpen, onCloseSidebar }) => {
  return (
    <aside>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full bg-white p-4 transition duration-300 md:w-[50%] lg:w-[35%] xl:max-w-[600px] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={onCloseSidebar} className="absolute right-4 top-4 p-2">
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"
          onClick={onCloseSidebar}
        />
      )}
    </aside>
  );
};

export default Sidebar;
