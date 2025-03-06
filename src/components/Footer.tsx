

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                 <h4 className="text-lg font-semibold mb-4">About Us</h4>
                 <ul className="space-y-2">
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       About Consular Services
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       RTI
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Terms & Conditions
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Privacy Policy
                     </a>
                   </li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                 <ul className="space-y-2">
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Download Forms
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Document Advisor
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Fee Calculator
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Track Application
                     </a>
                   </li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                 <ul className="space-y-2">
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Consular Offices
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Grievances
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Feedback
                     </a>
                   </li>
                   <li>
                     <a href="#" className="hover:text-blue-200">
                       Support
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm">
               <p>© 2025 Consular Services Portal. All rights reserved.</p>
             </div>
           </div>
         </footer>
  )
}

export default Footer