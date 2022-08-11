export const foodcardstyling = /*html*/`
<style>
div, span, h3 {
	margin: 0;
	padding: 0;
	border: 0;
}
#box-card{
    width: 167px;
    height: 211px;
    padding: 11px;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    display: grid;
    justify-content: space-between;
}
#box-card img{
    width: inherit;
    border-radius: 4px;
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
    font-size: 15px;
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
.ioncon{
    height: 16px;
    width: 16px;
    color: green;
    display: none;
}
</style>
`;