export default function PageTemplate({children}){
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-orange-400 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white/10 rounded 3xl-border shadow-2xl p-8">
            {children}
            </div>
        </div>
    );
}