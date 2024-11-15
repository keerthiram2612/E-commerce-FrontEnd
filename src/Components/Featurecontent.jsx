import React from 'react'
import "./Featurestyle.css"
export default function Featurecontent() {
  return (
    <div>
      <div className="feature">
        <div className="container">
            <div className="row">
                <h2 className='text-center'>Our Features</h2>
                 <div className="icons">
                 <div className="col-md-4 icons1">
                 <div className="organic-food text-center">
                 <img src="https://cdn-icons-png.freepik.com/512/5110/5110652.png" alt="" />
                 <h3 className='text-center'>Fresh and Organic</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, doloribus?</p>
                 <button>Read More</button>
                 </div>
                </div>
                 </div>
                 <div className="icons">
                 <div className="col-md-4 icons2">
                 <div className="organic-food text-center">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0TtfZ6jnU8rfhppM1wenCWxxMF96O-5N2g&s" alt="" />
                 <h3 className='text-center'>Fresh and Organic</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, doloribus?</p>
                 <button>Read More</button>
                 </div>
                </div>
                 </div>
                 <div className="icons">
                 <div className="col-md-4 icons3">
                 <div className="organic-food text-center">
                 <img src="https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-payment-terminal-color-icon-png-image_5254704.png" alt="" />
                 <h3 className='text-center'>Fresh and Organic</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, doloribus?</p>
                 <button>Read More</button>
                 </div>
                </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}
