import sidebarStyles from './Sidebar.module.css'; // optional

export default function Sidebar() {
    return (
        <div className={sidebarStyles.sidebarContainer}>
            <div className={sidebarStyles.menuContainer}>
                <div className={sidebarStyles.menuItem}>HOME</div>
                <div className={sidebarStyles.menuItem}>장내시장</div>
                <div className={sidebarStyles.menuItem}>장외시장</div>
                <div className={sidebarStyles.menuItem}>수급분석</div>
                <div className={sidebarStyles.menuItem}>관심종목</div>
            </div>
        </div>
    );
}
