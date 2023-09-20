const TermsPopUp = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: Function;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="fixed inset-0 w-full h-full flex justify-center items-center bg-transparent z-30 font-inter">
      <div className="bg-off-white w-4/5 h-4/5 overflow-scroll p-4 rounded-3xl">
        <div
          className={`${className} flex flex-col gap-6`}
          onClick={handleClick}
        >
          <div>
            <p className="text-center underline font-bold">Regler och Vilkor</p>
          </div>
          <div className="h-full text-xs flex flex-col gap-4">
            <div>
              <h3 className="font-semibold">Personuppgiftsbiträdesavtal</h3>
              <p>
                Mellan med orgnr , (nedan PERSONUPPGIFTSANSVARIG) och med orgnr
                (nedan PERSONUPPGIFTSBITRÄDET) har följande avtal träffats.{" "}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">1. Bakgrund och omfattning</h3>
              <p>
                Parterna har den träffat avtal varigenom PERSONUPPGIFTSBITRÄDET
                har åtagit sig att för PERSONUPPGIFTSANSVARIG räkning , nedan
                ”Tjänsteavtalet”. Vid utförandet av tjänsterna enligt
                Tjänsteavtalet kommer PERSONUPPGIFTSBITRÄDET att behandla
                personuppgifter för PERSONUPPGIFTSANSVARIGs räkning.
                PERSONUPPGIFTSBITRÄDET kommer därmed att vid de aktuella
                tjänsternas utförande att agera som personuppgiftsbiträde åt
                PERSONUPPGIFTSANSVARIG som är personuppgiftsansvarig för de
                personuppgifter som ska behandlas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                2. Ändamål med behandling av personuppgifterna
              </h3>
              <p>
                PERSONUPPGIFTSBITRÄDET får endast behandla personuppgifter för
                de ändamål som uppgetts i Tjänsteavtalet eller i skriftligt
                tilläggsavtal som hänvisar till detta avtal och inte för något
                annat ändamål än vad som är nödvändigt för fullgörande av
                Tjänsteavtalet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3. Underleverantör</h3>
              <p>
                PERSONUPPGIFTSBITRÄDET får inte utan beställarens skriftliga
                medgivande lämna personuppgifter för behandling hos
                underleverantör s.k. underbiträde. Om ett allmänt medgivande
                lämnas ska PERSONUPPGIFTSBITRÄDET informera
                PERSONUPPGIFTSANSVARIG om eventuella planer på att anlita nya
                underbiträden eller byta underbiträde. PERSONUPPGIFTSANSVARIG
                ska snarast göra invändningar mot sådana förändringar, dock
                senast inom 2 veckor från PERSONUPPGIFTSBITRÄDET meddelat att
                förändringen kommer att ske. Invänder PERSONUPPGIFTSANSVARIG mot
                förändringarna får personuppgifterna inte överlämnas och
                tjänsterna ska utföras av PERSONUPPGIFTSBITRÄDET i egen regi
                alternativt av tidigare godkänt underbiträde.
                PERSONUPPGIFTSBITRÄDET ansvarar för att skriftliga avtal ingås
                med underleverantörer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                4. Villkor för behandlingen av personuppgifter
              </h3>
              <p>
                För PERSONUPPGIFTSBITRÄDETS behandling gäller följande.
                PERSONUPPGIFTSBITRÄDET a) får endast behandla personuppgifter
                efter dokumenterade instruktion från den
                personuppgiftsansvarige, inbegripet när det gäller överföringar
                av personuppgifter till ett tredje land eller en internationell
                organisation, såvida inte denna behandling krävs enligt
                unionsrätten eller enligt en medlemsstats nationella rätt som
                personuppgiftsbiträdet omfattas av. I sådant fall ska
                personuppgiftsbiträdet informera den personuppgiftsansvarige om
                det rättsliga kravet innan uppgifterna behandlas, såvida sådan
                information inte är förbjuden med hänvisning till ett viktigt
                allmänintresse enligt denna rätt, b) ska säkerställa att
                personer med behörighet att behandla personuppgifterna har
                åtagit sig att iaktta konfidentialitet eller omfattas av en
                lämplig lagstadgad tystnadsplikt, c) ska vidta alla åtgärder för
                säkerhet i samband med behandlingen av personuppgifterna enligt
                art 32 i dataskyddsförordningen d) ska respektera de villkor som
                gäller för anlitande av underbiträde enligt p 3 ovan e) ska med
                tanke på behandlingens art, hjälpa den personuppgiftsansvarige
                genom lämpliga tekniska och organisatoriska åtgärder, i den mån
                detta är möjligt, så att den personuppgiftsansvarige kan
                fullgöra sin skyldighet att svara på begäran om utövande av den
                registrerades rättigheter i enligt helt med kapitel III i
                dataskyddsförordningen, f) ska bistå den personuppgiftsansvarige
                med att se till att skyldigheterna enligt art 32-36 i
                dataskyddsförordningen fullgörs (angående information till den
                registrerade om en personuppgiftsincident, anmälan av en
                personuppgiftsincident till tillsynsmyndigheten och information
                till den registrerade om en personuppgiftsincident), med
                beaktande av typen av behandling och den information som
                personuppgiftbiträdet har att tillgå, g) beroende på vad den
                personuppgiftsansvarige väljer, ska radera eller återlämna
                samtliga personuppgifter till den personuppgiftsansvarige efter
                det att tillhandahållandet av behandlingstjänsterna har
                avslutats, och radera befintliga kopior såvida inte lagring av
                personuppgifterna krävs enligt unionsrätten eller nationell
                rätt, och h) ska ge den personuppgiftsansvarige tillgång till
                all information som krävs för att visa att de skyldigheter som
                fastställs i denna artikel har fullgjorts samt möjliggöra och
                bidra till granskningar, inbegripet inspektioner, som genomförs
                av den personuppgiftsansvarige eller av en annan revisor som
                bemyndigats av den personuppgiftsansvarige. Vidare förbinder sig
                PERSONUPPGIFTSBITRÄDET att föra register över behandlingarna och
                samarbeta med tillsynsmyndigheten och göra detta register
                tillgängligt för tillsynsmyndigheten. PERSONUPPGIFTSBITRÄDET ska
                vid behov och på begäran bistå den personuppgiftsansvarige med
                fullgörande av de skyldigheter som härrör från utförandet av
                konsekvensbedömningar avseende dataskydd och förhandssamråd med
                tillsynsmyndigheten.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">5. Säkerhetsåtgärder</h3>
              <p>
                PERSONUPPGIFTSBITRÄDET ska begränsa åtkomsten till
                personuppgifter till personer som behöver sådan åtkomst för att
                fullgöra sina arbetsuppgifter. PERSONUPPGIFTSBITRÄDET ska se
                till att personuppgifter inte behandlas i strid med
                bestämmelserna i vid var tid gällande lagstiftning m.m. gällande
                dataskydd för personuppgifter såsom t.ex. Dataskyddsförordningen
                och Datainspektionens föreskrifter. PERSONUPPGIFTSBITRÄDET ska
                vidta lämpliga tekniska och organisatoriska åtgärder för att
                skydda personuppgifter från obehörig åtkomst, förstörelse och
                ändring. PERSONUPPGIFTSBITRÄDET förbinder sig att omedelbart
                informera den personuppgiftsansvarige om en instruktion strider
                mot dataskyddförordningen eller mot andra bestämmelser avseende
                dataskydd för personuppgifter. PERSONUPPGIFTSBITRÄDET och
                PERSONUPPGIFTSANSVARIG förbinder sig att med beaktande av den
                senaste utvecklingen, genomförandekostnaderna och behandlingens
                art, omfattning, sammanhang och ändamål samt riskerna, av
                varierande sannolikhetsgrad och allvar, för fysiska personers
                rättigheter och friheter vidta lämpliga tekniska och
                organisatoriska åtgärder för att säkerställa en säkerhetsnivå
                som är lämplig i förhållande till risken, inbegripet, när det är
                lämpligt a) pseudonymisering och kryptering av personuppgifter,
                b) förmågan att fortlöpande säkerställa konfidentialitet,
                integritet, tillgänglighet och motståndskraft hos
                behandlingsystemen och -tjänsterna, c) förmågan att återställa
                tillgängligheten och tillgången till personuppgifter i rimlig
                tid vid en fysisk eller teknisk incident, d) ett förfarande för
                att regelbundet testa, undersöka och utvärdera effektiviteten
                hos de tekniska och organisatoriska åtgärder som ska säkerställa
                behandlingens säkerhet. Vid bedömningen av lämplig säkerhetsnivå
                ska särskild hänsyn tas till de risker som behandling medför, i
                synnerhet från oavsiktlig eller olaglig förstöring, förlust
                eller ändring eller till obehörigt röjande av eller obehörig
                åtkomst till de personuppgifter som överförts, lagrats eller på
                annat sätt behandlats. PERSONUPPGIFTSANSVARIG och
                PERSONUPPGIFTSBITRÄDET ska vidta åtgärder för att säkerställa
                att varje fysisk person som utför arbete under den
                PERSONUPPGIFTSANSVARIGs eller PERSONUPPGIFTSBITRÄDETs
                överinseende, och som får tillgång till personuppgifter, endast
                behandlar dessa på instruktion från PERSONUPPGIFTSANSVARIG, om
                inte unionsrätten eller medlemsstaternas nationella rätt ålägger
                honom eller henne att göra det.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">6. Personuppgiftsincidenter</h3>
              <p>
                PERSONUPPGIFTSBITRÄDET ska underrätta PERSONUPPGIFTSANSVARIG
                utan onödigt dröjsmål efter att ha fått vetskap om en
                personuppgiftsincident. Underrättelsen ska beskriva
                personuppgiftsincidentens art, inbegripet, om så är möjligt, de
                kategorier av och det ungefärliga antalet registrerade som
                berörs samt de kategorier av och det ungefärliga antalet
                personuppgiftsposter som berörs. Om och i den utsträckning det
                inte är möjligt att tillhandahålla informationen samtidigt, får
                informationen tillhandahållas i omgångar utan onödigt
                ytterligare dröjsmål. PERSONUPPGIFTSBITRÄDET ska vara
                PERSONUPPGIFTSANSVARIG behjälplig med att dokumentera alla
                personuppgiftsincidenter, inbegripet omständigheterna kring
                personuppgiftsincidenten, dess effekter och de korrigerande
                åtgärder som vidtagits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7. Ersättning</h3>
              <p>
                PERSONUPPGIFTSBITRÄDET har rätt att debitera
                PERSONUPPGIFTSANSVARIG för kostnader som uppstår med anledning
                av säkerhetsåtgärder och kostnader i samband med
                personuppgiftsincidenter utöver den ersättning som följer av
                Tjänsteavtalet endast i den mån personuppgiftsansvarig genom
                oaktsamhet orsakat kostnaderna.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">8. Kontakter med tredje man</h3>
              <p>
                Om tredje man (t.ex. registrerad, myndighet eller någon annan)
                vänder sig till PERSONUPPGIFTSBITRÄDET med begäran om
                information om behandling av personuppgifter ska
                PERSONUPPGIFTSBITRÄDET utan dröjsmål vidarebefordra en sådan
                begäran till PERSONUPPGIFTSANSVARIG. PERSONUPPGIFTSBITRÄDET har
                inte rätt att företräda PERSONUPPGIFTSANSVARIG gentemot tredje
                man i fråga om behandling av personuppgifter såvida inte
                PERSONUPPGIFTSANSVARIG uttryckligen har medgivit detta.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">9. Tystnadsplikt</h3>
              <p>
                PERSONUPPGIFTSBITRÄDET och dessa anställda och underkonsulter
                har tystnadsplikt för samtliga personuppgifter som behandlas om
                inget annat är skriftligen avtalat med PERSONUPPGIFTSANSVARIG.
                Tystnadsplikt råder inte heller gentemot den registrerade eller
                för uppgifter som är allmänt kända.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">10. Immateriella rättighet</h3>
              <p>
                Samtliga immateriella rättigheter till personuppgifterna innehas
                av PERSONUPPGIFTSANSVARIG eller den registrerade.
                PERSONUPPGIFTSBITRÄDET får en icke-exklusiv rätt att använda
                personuppgifterna och ev. immateriella rättigheter kopplade till
                dessa enbart för fullgörandet av sina åtaganden enligt
                Tjänsteavtalet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">11. Ansvar</h3>
              <p>
                Om en registrerad eller annan tredje man riktar krav mot
                PERSONUPPGIFTSANSVARIG på grund av PERSONUPPGIFTSBITRÄDETS
                behandling av personuppgifter ska PERSONUPPGIFTSBITRÄDET hålla
                personuppgiftsansvarige skadeslös för krav som följer av att
                PERSONUPPGIFTSBITRÄDET inte följt detta avtal. Om en registrerad
                eller annan tredje man riktar krav mot PERSONUPPGIFTSBITRÄDET på
                grund av PERSONUPPGIFTSANSVARIGs instruktion om behandling av
                personuppgifter ska PERSONUPPGIFTSANSVARIG hålla
                PERSONUPPGIFTSBITRÄDET skadeslös för krav, dock inte om
                PERSONUPPGIFTSBITRÄDET borde ha uppmärksammat
                PERSONUPPGIFTSANSVARIG på att behandlingen strider mot gällande
                regler för dataskydd för behandling av personuppgifter. Om flera
                personuppgiftsansvariga eller personuppgiftsbiträden medverkat
                vid samma behandling, kan varje personuppgiftsansvarig eller
                personuppgiftsbiträde hållas ansvarig för hela skadan. Om de är
                förenade i samma rättsliga förfarande i enlighet med
                medlemsstaternas nationella rätt, kan ersättningen dock fördelas
                i enlighet med varje personuppgiftsansvarigs eller
                personuppgiftsbiträdes ansvar för den genom behandlingen
                uppkomna skadan, förutsatt att den registrerade som lidit skada
                tillförsäkras full och effektiv ersättning. Varje
                personuppgiftsansvarig eller personuppgiftsbiträde som har
                betalat full ersättning får därefter inleda förfaranden för
                återkrav mot andra personuppgiftsansvariga eller
                personuppgiftsbiträden som medverkat vid samma behandling.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">12. Radering</h3>
              <p>
                PERSONUPPGIFTSBITRÄDET ska efter med Tjänsteavtalets upphörande
                radera samtliga personuppgifter som behandlats för
                personuppgiftsansvarig om inte tidigare tidpunkt överenskoms.
                PERSONUPPGIFTSBITRÄDET är i samband med Tjänsteavtalets
                upphörande skyldig att återlämna behandlade uppgifter i lämpligt
                format till PERSONUPPGIFTSANSVARIG.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">13. Ändringar och tillägg</h3>
              <p>
                Ändringar eller tillägg till detta avtal ska för sin giltighet
                vara skriftliga och undertecknade av båda parter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">14. Avtalstid och upphörande</h3>
              <p>
                Detta avtal träder i kraft när det undertecknats av bägge
                parter. Avtalet upphör att gälla när Tjänsteavtalet upphör att
                gälla. Dock ska punkt 9 fortsätta att gälla i ett år efter att
                avtalet upphört. Detta avtal har upprättats i två
                originalexemplar varav parterna har tagit var sitt den-- den--
                för-- för--
              </p>
            </div>
          </div>
          <div>
            <p className="text-center">Stäng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPopUp;
