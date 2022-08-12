export const foodcardstyling = /*html*/`
<style>
div, span, h3 {
	margin: 0;
	padding: 0;
	border: 0;
}
#box-card{
    width: 160px;
    height: 200px;
    padding: 11px;
    border-radius: 7px;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    display: grid;
    justify-content: space-between;
}
#box-card img{
    object-fit: cover;
    height: 110px;
    width: inherit;
    border-radius: 5px;
}
.title{
    font-weight: 700;
    text-align: start;
    font-size: 16px;
    color: #333333;
}
.sub{
    text-align: start;
    color: #A6A6A6;
    font-size: 13px;
}
.price{
    transform: translateY(4px);
    display: flex;
    justify-content: space-between;
    padding-right: 6px;
}
.price h3{
    font-weight: 400;
    font-size: 16px;
    color: black;
}
</style>
`;