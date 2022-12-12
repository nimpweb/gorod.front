import { Layout, Container } from "../components";

export default function Limit() {

  return (
   <Layout 
    pageTitle="Лимиты по операциям::Удобные платежи"
  >
    <Container>
      <h1 className="font-bold text-xl text-center mb-10">Лимиты по операциям обслуживания банковских карт на интернет-сайте Банка в целях осуществления переводов денежных средств в рамках Системы «Город»</h1>


      <div class="overflow-hidden bg-white shadow sm:rounded-lg">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
  </div>
  <div class="border-t border-gray-200">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Максимальная сумма</h3>
    </div>

    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">одной операции*</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">30 100 руб.</dd>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">10 000 руб.</dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Application for</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Email address</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">About</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Attachments</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>


        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In facilis nostrum nesciunt a, odio minus rerum natus soluta saepe? Fugit natus tenetur, iusto corrupti exercitationem repudiandae error aperiam quis accusamus?
        Eligendi et soluta tempore quis amet unde nulla quibusdam veniam optio error facere, minus, ut voluptas reprehenderit! Eius aliquam, sed asperiores odio soluta voluptas, impedit expedita vitae rerum obcaecati ad.
        Voluptatem iure natus nobis saepe animi autem quis ducimus, laboriosam temporibus eos dolore? Temporibus laborum velit quis distinctio perspiciatis amet, molestias fugit sed ab. Ad, saepe autem. Temporibus, eius labore!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint error, voluptate dolores quod maiores aut earum suscipit veniam nam velit tenetur, sit illum debitis tempora esse quia ab perferendis.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aspernatur eum quisquam minima est. Totam quidem ad itaque, temporibus culpa quas cum ullam at animi ex harum minus repellendus aspernatur.
        Totam asperiores vero deleniti, tenetur molestias, accusantium unde sapiente eum, libero molestiae odio dignissimos. Voluptatem quos velit quidem blanditiis maxime placeat architecto recusandae tempore officia, facere voluptatibus fuga omnis quibusdam.
        Aspernatur ipsam eum alias tempore perferendis maxime, amet neque quibusdam. Tempora dolores quisquam ipsum sapiente cum doloremque facere soluta doloribus laboriosam quis, illo incidunt dignissimos voluptas quibusdam at tempore? Deserunt?
        Perferendis, saepe. Velit facilis sit, excepturi iure error fuga dolores earum reprehenderit molestias repellendus, odit mollitia rem impedit est adipisci at, quod quos deserunt ullam animi eligendi. Debitis, eius modi?</p>
      </Container>
   </Layout>
  )


}
