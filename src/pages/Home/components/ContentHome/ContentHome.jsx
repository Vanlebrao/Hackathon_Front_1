import * as S from './styles'

export default function ContentHome({navLink}){

    const text = [
        {
            title: 'Bem Vindo ao DevEstudos!',
            content: (
                <div>
                    <p>Organizar seus estudos é uma habilidade que você pode aprimorar com o tempo, Experimente diferentes abordagens para encontrar a mais eficaz. E lembre-se de ser consistente  e perveverante em sua fornada de aprendizado.</p>
                    <br />
                    <p>Algumas dicas para organização:</p>
                    <br />
                    <ul>
                        <li>
                           - Estabeleça metas claras e crie um cronograma para seus estudos.
                        </li>
                        <li>
                           - Priorize tarefas  e divida os estudos em segmentos menores.
                        </li>
                        <li>
                           - Utilize tecnicas de aprendizado ativo, elimine distrações e faça pausas regulares.
                        </li>
                        <li>
                           - Seja flexível e esteja aberto a ajustar seu plano de estudos conforme necessario.
                        </li>
                        <li>
                           - Estabeleça metas claras e crie um cronograma para seus estudos.
                        </li>
                    </ul>
                    <br />
                    <p>
                        Aqui, você pode criar um cronograma, planejar seu dia e semana fazer listas de tarefas e usar a tecnica pomodoro. Alcançar metas dá pontos para evoluir seu avatar.
                    </p>
             </div>
                
            )
        },

        {
            title: 'Organize sua semana!',
            content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!`
        },
        {
            title: 'Como Estudar?',
            content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem`
        },
        {
            title: 'Crie seus Habitos!',
            content: ( 
                <div> 
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi error rem nam fugit, a exercitationem dolore accusamus veritatis amet ratione odio. Ipsa mollitia libero sed!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam dolorum ipsam omnis excepturi
                    </p>
                </div>
            )
        },
        
]

console.log(navLink);
    return(
        <S.ContentHomeContainer>
            <S.ContentHomeTitle>
                {text[navLink].title}
            </S.ContentHomeTitle>
           
            <S.ContentHomeText>
                {text[navLink].content}
            </S.ContentHomeText>
        </S.ContentHomeContainer>
    )
}