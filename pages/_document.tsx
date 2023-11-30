import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en" translate='no'>
                <Head />
                {/* <script src="/public/jquery.min.js"></script>
                <script src="/public/pma.ui.js"></script>
                <script src="/public/pma.ui.js.map"></script>
                <script src="/public/viewer.js"></script> */}
                <body className='bg-slate-100 dark:bg-slate-900 transition-all'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;