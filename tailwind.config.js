/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'playpen': ['Playpen Sans', 'cursive'],
      },
      colors:{
        'primary':'#00114A',
        'secondary':'#365677',
        'b1':'#BCCAD9',
        'b2':'#BCCAD9',
        'b4':'#F0F3F7',
        'r1':'#E92215',
      },
      backgroundImage: {
        'primary_gra': 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
      },
      fontSize:{
        '66':['66px','76px'],
        '56':['56px','66px'],
        '50':['50px','61px'],
        '46':['46px','61px'],
        '40':['40px','52px'],
        '36':['36px','46px'],
        '32':['32px','40px'],
        '28':['28px','36px'],
        '26':['26px','36px'],
        '24':['24px','32px'],
        '22':['22px','30px'],
        '20':['20px','28px'],
        '18':['18px','26px'],
        '16':['16px','24px'],
        '14':['14px','22px'],
        '12':['12px','18px'],
      },
      boxShadow:{
        'one':'0px 8px 13px 0px #00114A1A'
      }
    },
  },
  plugins: [],
}

