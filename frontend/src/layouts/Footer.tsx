import footerStyles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerInner}>
                <div className={footerStyles.footerRow}>
                    <span className={footerStyles.footerTitle}>FINSIGHT</span>
                    <span className={footerStyles.footerLink}>개인정보취급방침</span>
                    <span className={footerStyles.footerDivider}>|</span>
                    <span className={footerStyles.footerLink}>찾아오시는 길</span>
                </div>
                <span className={footerStyles.footerCopy}>
                    COPYRIGHT 2025 BY FINSIGHT P&amp;I INC. ALL RIGHTS RESERVED.
                </span>
            </div>
        </footer>
    );
}
