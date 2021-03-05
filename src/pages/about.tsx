import * as React from "react"

import { Main } from "../components/main"

let lorem = [
    "Lorem ipsum dolor sit amet consectetur adipisici50 elit. Pariatur h69 ic conse80 ctetur atque ips100 am beatae necess120 itatibus facilis140 harum, natus exp160",
    "Edita aut dolor. Optio earum laudantium at dolor50 perferendis quid69 em labor80 iosam incidunt q100 uae, rem volupta120 tibus commodi de140 serunt minima, a160",
    "Itaque obcaecati accusantium id excepturi culpa 50 ssimus dolor qui69 s velit 80 explicabo praese100 ntium cumque? Vo120 luptate ab unde,140 impedit laborios160",
    "M. Possimus eligendi voluptas cumque cupiditate 50 nis provident od69 it dolor80 emque ea volupta100 tem a impedit se120 qui est officia 140 veniam aperiam c160",
    "Sequatur laborum quia id laboriosam temporibus m50 ores, quos qui r69 eprehend80 erit non. Natus 100 obcaecati pariat120 ur illum ab debi140 tis placeat repr160",
    "Enderit, distinctio ad harum enim, praesentium. 50 lore tenetur, el69 igendi v80 elit totam, sint100 voluptatibus sed120 sit quia, atque 140 non quas commodi160",
    "Deserunt inventore incidunt labore sed recusanda50 modi excepturi n69 ihil ist80 e ad, aperiam er100 ror dolorem beat120 ae, vero adipisc140 i corporis earum160",
    "Olor! Ad quae id eos consequatur reprehenderit v50 uptatum hic laud69 antium p80 laceat velit ips100 am a eveniet rer120 um, rem libero p140 erspiciatis inci160",
    "Nt earum. Eaque suscipit tenetur voluptatibus, l50 dantium ab, non 69 magni la80 borum, quibusdam100 nam natus labori120 osam. Ipsam, ad 140 exercitationem q160",
    "Ibusdam nesciunt magni possimus, est facere obca50 ati minima asper69 natur ni80 hil. Error vero 100 laboriosam nostr120 um voluptas nobi140 s totam aliquam 160",
    "Ssimus ipsum repellat cumque, ea cum quod impedi50 facilis ullam qu69 am dolor80 emque nihil labo100 re, amet porro. 120 Quas accusantium140 vitae quaerat, o160",
    "It maxime voluptas ipsa assumenda, consequuntur 50 que eos placeat 69 tempore 80 laudantium incid100 unt eaque debiti120 s? Hic voluptati140 bus deserunt sit160",
    "Spernatur placeat asperiores magnam dolor dolori50 s animi accusant69 ium veli80 t, error quod ne100 mo sed vero iure120 ? Dicta incidunt140 neque illo quaer160",
    "Tuamet culpa enim, est vitae error quo quis repu50 andae illum dolo69 rum prov80 ident obcaecati 100 voluptatem ullam120 natus blanditiis140 itaque quos aliq160",
    "Uam. Necessitatibus suscipit ut voluptatibus ali50 impedit aut, ius69 to repud80 iandae sunt modi100 aperiam autem ma120 xime, fugit, rem140 ipsum architec c160",
    "To quidem dolor maiores fugiat explicabo atque i50 am possimus! Ali69 quam, fu80 giat id aperiam.100 Similique illum,120 porro corrupti n140 atus quaerat. Cu160",
]

export default function About() {
    return (
        <Main title="About">
            <h1>H1. Here I Come</h1>
            <p>
                According to{" "}
                <a href="https://www.researchgate.net/publication/234578707_Optimal_Line_Length_in_Reading--A_Literature_Review">
                    this 2005 study
                </a>
                , optimal reading line length should not exceed{" "}
                <em>70 characters</em>. Lorem Ipsum text below has marks for 50,
                69, 80, 100, 120, 140 and 160 characters in each paragraph. You
                can use it to&nbsp;tune the line width for a chosen font.
            </p>
            <h2>H2. Coming Through</h2>
            <p>Text formatting time!</p>
            <ul>
                <li>
                    <code>&lt;b&gt;</code> - <b>Bold text</b>
                </li>
                <li>
                    <code>&lt;strong&gt;</code> -{" "}
                    <strong>Important text</strong>
                </li>
                <li>
                    <code>&lt;i&gt;</code> - <i>Italic text</i>
                </li>
                <li>
                    <code>&lt;em&gt;</code> - <em>Emphasized text</em>
                </li>
                <li>
                    <code>&lt;mark&gt;</code> - <mark>Marked text</mark>
                </li>
                <li>
                    <code>&lt;small&gt;</code> - <small>Smaller text</small>
                </li>
                <li>
                    <code>&lt;del&gt;</code> - <del>Deleted text</del>
                </li>
                <li>
                    <code>&lt;ins&gt;</code> - <ins>Inserted text</ins>
                </li>
                <li>
                    <code>&lt;sub&gt;</code> - Test<sub>Subscript text</sub>
                </li>
                <li>
                    <code>&lt;sup&gt;</code> - Test
                    <sup>Superscript text</sup>
                </li>
                <li>
                    Nerdy text
                    <ul>
                        <li>
                            <code>&lt;code&gt;</code> -{" "}
                            <code>Piece of code</code>
                        </li>
                        <li>
                            <code>&lt;kbd&gt;</code> - <kbd>Ctrl + S</kbd>{" "}
                            Keyboard input
                        </li>
                        <li>
                            <code>&lt;pre&gt;</code> -{" "}
                            <pre>Preformatted{"   \n   "}text</pre>
                        </li>
                        <li>
                            <code>&lt;samp&gt;</code> -{" "}
                            <samp>Sample output</samp>
                        </li>
                        <li>
                            <code>&lt;var&gt;</code> - <var>a</var> <var>b</var>{" "}
                            <var>c</var> Variable
                        </li>
                    </ul>
                </li>
            </ul>
            <h3>H3. Look at Me</h3>
            Here goes some text without a <code>p</code> tag. Do things break?
            <br />
            {lorem[0]}
            <br />
            {lorem[1]}
            <h4>H4. Want Some More?</h4>
            <p>
                {lorem[2]}
                <br />
                {lorem[3]}
                <br />
                {lorem[4]}
            </p>
            <p>
                {lorem[5]}
                <br />
                {lorem[6]}
            </p>
            <p>{lorem[7]}</p>
            <h5>H5. Bees in a Hive</h5>
            <p>{lorem[8]}</p>
            <p>{lorem[9]}</p>
            <h6>H6. Sticks and Bricks</h6>
            <p>
                {lorem[10]}
                <br />
                {lorem[11]}
            </p>
            <p>{lorem[12]}</p>
            <hr />
            <p>{lorem[13]}</p>
        </Main>
    )
}
