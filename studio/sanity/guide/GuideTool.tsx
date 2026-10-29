import type {ReactNode} from 'react'
import {Badge, Box, Card, Container, Flex, Heading, Stack, Text} from '@sanity/ui'

/**
 * Client-facing A–Z handbook for the Wallantq Studio, mounted at /admin/guide.
 * The Studio only renders tools after sign-in, so this page is never visible to the public.
 */

type Section = {id: string; title: string; body: ReactNode}

const P = ({children}: {children: ReactNode}) => (
  <Text size={2} style={{lineHeight: 1.7}}>
    {children}
  </Text>
)

const Steps = ({items}: {items: ReactNode[]}) => (
  <Stack space={3} as="ol" style={{margin: 0, paddingLeft: 22}}>
    {items.map((item, i) => (
      <Text key={i} as="li" size={2} style={{lineHeight: 1.7}}>
        {item}
      </Text>
    ))}
  </Stack>
)

const Bullets = ({items}: {items: ReactNode[]}) => (
  <Stack space={3} as="ul" style={{margin: 0, paddingLeft: 22}}>
    {items.map((item, i) => (
      <Text key={i} as="li" size={2} style={{lineHeight: 1.7}}>
        {item}
      </Text>
    ))}
  </Stack>
)

const Note = ({tone = 'primary', children}: {tone?: 'primary' | 'caution' | 'positive'; children: ReactNode}) => (
  <Card padding={4} radius={2} tone={tone} border>
    <Text size={2} style={{lineHeight: 1.7}}>
      {children}
    </Text>
  </Card>
)

const Field = ({name, children}: {name: string; children: ReactNode}) => (
  <Box>
    <Text size={2} weight="semibold" style={{lineHeight: 1.7}}>
      {name}
    </Text>
    <Box marginTop={1}>
      <Text size={2} muted style={{lineHeight: 1.7}}>
        {children}
      </Text>
    </Box>
  </Box>
)

const SECTIONS: Section[] = [
  {
    id: 'basics',
    title: '1. The basics',
    body: (
      <Stack space={4}>
        <P>
          This Studio is where you manage everything on wallantq.com: your products, their photos and
          films, and all the editable text on the homepage, About and Contact pages. You never need to
          touch code.
        </P>
        <Bullets
          items={[
            <>
              <b>Open the Studio:</b> go to <code>wallantq.com/admin</code> and sign in with the account
              you were invited with.
            </>,
            <>
              <b>Left menu:</b> <b>Products</b> (every artwork) and <b>Site Settings</b> (all page text).
            </>,
            <>
              <b>Top bar:</b> <b>Structure</b> is where you edit content. <b>Guide</b> is this page.{' '}
              <b>Vision</b> is a developer tool, so you can ignore it.
            </>,
          ]}
        />
      </Stack>
    ),
  },
  {
    id: 'publish',
    title: '2. Draft, Publish and when the website updates',
    body: (
      <Stack space={4}>
        <P>
          Every change you type is saved automatically as a <b>draft</b>. Visitors do not see a
          draft. Nothing goes public until you press the green <b>Publish</b> button at the bottom
          right of the document.
        </P>
        <Steps
          items={[
            'Make your changes. The status at the bottom shows “Draft” or “Edited”.',
            <>
              Press <b>Publish</b>. The status changes to “Published”.
            </>,
            'Open the website in a new tab and check the result.',
          ]}
        />
        <Note tone="caution">
          <b>When will I see the change?</b>
          <br />• <b>Homepage</b> (hero, featured pieces, new arrivals, philosophy, values, bespoke,
          quote, CTA, trust badges): within a minute of publishing. Refresh the page.
          <br />• <b>Collection page, product pages, About, Contact and the gold marquee bar:</b> these
          update on the next website deploy. A <b>brand-new product’s own page</b> also appears only
          after a deploy. After publishing, ask your developer to run a deploy.
        </Note>
        <P>
          <b>Made a mistake?</b> Before publishing, use the <b>⋯</b> menu next to Publish and choose{' '}
          <b>Discard changes</b>. After publishing, open the <b>History</b> (clock icon, top right of the
          document), pick an earlier version and choose <b>Restore</b>.
        </P>
      </Stack>
    ),
  },
  {
    id: 'add-product',
    title: '3. Adding a new product (step by step)',
    body: (
      <Stack space={4}>
        <Steps
          items={[
            <>
              Click <b>Products</b> in the left menu, then the <b>✎ / +</b> (Create) button at the top of the
              list.
            </>,
            <>
              Fill in the <b>title</b> fields (see section 4 for how the three title parts work).
            </>,
            <>
              Next to <b>Slug</b>, press <b>Generate</b>. This creates the web address, e.g.{' '}
              <code>/collection/petals-of</code>. You can also type the SKU in lowercase instead, which is
              what the existing pieces use (e.g. <code>wmnxmf39</code>).
            </>,
            <>
              Enter the <b>SKU</b> (required) and the <b>Number</b> in the same style as the others,
              e.g. <code>Nº 017</code>. Products are listed on the website in Number order.
            </>,
            'Fill in the subtitle, description and specification fields.',
            <>
              Under <b>Media Source</b>, keep <b>Upload directly to CMS</b> selected, then upload the{' '}
              <b>Product Image</b> and (optional) <b>Product Video File</b>. See section 5.
            </>,
            <>
              Tick <b>New Arrival?</b> and/or <b>Featured Product?</b> if needed (section 6).
            </>,
            <>
              Press <b>Publish</b>, then ask for a deploy so the product’s own page goes live.
            </>,
          ]}
        />
        <Note>
          Tip: the fastest way to add a similar piece is to open an existing product, use the{' '}
          <b>⋯</b> menu → <b>Duplicate</b>, then change the title, slug, SKU, number and media.
        </Note>
      </Stack>
    ),
  },
  {
    id: 'fields',
    title: '4. Product fields explained',
    body: (
      <Stack space={4}>
        <Field name="Title Before / Title Accent / Title After">
          The website shows titles with one word in gold italics. Split the name into three parts. For
          “Petals of <i>Reverie</i>”: Before = <code>Petals of</code>, Accent = <code>Reverie</code>, After =
          empty. For “<i>Oracle</i> by the Window”: Before = empty, Accent = <code>Oracle</code>, After ={' '}
          <code> by the Window</code> (with a leading space).
        </Field>
        <Field name="Slug">
          The product’s web address. Keep it lowercase with no spaces. Do not change the slug of a
          published product, because existing links and shares to it will break.
        </Field>
        <Field name="SKU">Your internal product code, e.g. WMNXMF39. Required.</Field>
        <Field name="Number">Shown as the small “Nº 009” tag on the card. It also sets the display order.</Field>
        <Field name="Subtitle">One short line under the title on the product page.</Field>
        <Field name="Deck / Description">The main paragraph describing the piece.</Field>
        <Field name="Category, Material, Dimensions, Weight, Finish, Maker, Lead Time">
          Specification rows on the product page. Sensible defaults are pre-filled. Change them only when
          they differ for this piece, e.g. Dimensions <code>3 x 3 ft · 1.5 inch deep</code>.
        </Field>
        <Field name="Theme, Color Palette, Mood">Descriptive details shown on the product page.</Field>
        <Field name="Tags">Keywords that help the website search find the piece. Add one per entry.</Field>
        <Field name="Provenance / Care & Assurance">
          Expandable information blocks on the product page, e.g. “Care” with care instructions. Each item has
          a title and a body. Drag the ⠿ handle to reorder.
        </Field>
      </Stack>
    ),
  },
  {
    id: 'media',
    title: '5. Photos and videos',
    body: (
      <Stack space={4}>
        <Bullets
          items={[
            <>
              <b>Image format:</b> PNG, JPG or WebP. Square images of at least <b>1400 × 1400 px</b> look best.
              AVIF also works.
            </>,
            <>
              <b>The full artwork is always shown.</b> The website never crops product images, so leave some
              even background around the piece.
            </>,
            <>
              <b>Video:</b> MP4 only. Keep it short (10–30 seconds) and ideally under 20 MB so it loads fast on
              phones.
            </>,
            <>
              <b>Replacing media:</b> hover over the current image/video, click the <b>⋯</b> or <b>Replace</b>{' '}
              button and upload the new file, then Publish.
            </>,
            <>
              <b>Media Source:</b> always use <b>Upload directly to CMS</b>. The “Hostinger Legacy” option points to
              the old asset server and should not be used for new products.
            </>,
          ]}
        />
      </Stack>
    ),
  },
  {
    id: 'homepage-products',
    title: '6. Choosing which products appear on the homepage',
    body: (
      <Stack space={4}>
        <Field name="Featured collection (the large 5-piece layout)">
          Go to <b>Site Settings → Featured Collection → Featured Products Selection</b>. Pick{' '}
          <b>exactly 5</b> products and drag them into order: 1st = large left, 2nd = middle, 3rd = small
          right, 4th & 5th = bottom row. The “Featured Product?” tick box on a product is only a backup, used
          when fewer than 5 are selected here.
        </Field>
        <Field name="New arrivals (“Recently added”)">
          Tick <b>New Arrival?</b> on up to 4 products. If fewer than 4 are ticked, the website fills the
          remaining spaces automatically. Untick older pieces when new ones arrive.
        </Field>
      </Stack>
    ),
  },
  {
    id: 'site-settings',
    title: '7. Editing website text (Site Settings)',
    body: (
      <Stack space={4}>
        <P>
          Click <b>Site Settings</b> in the left menu. The tabs across the top group the fields by page section.
          Every field has a short description under its name. Fields marked as required must be filled before
          you can publish.
        </P>
        <Field name="Marquee Ticker">The scrolling gold bar at the top of every page. At least 3 messages.</Field>
        <Field name="Hero Section">
          The big homepage headline is split into Line 1, a gold italic accent word, and Line 3, plus the
          description paragraph and small sub-note.
        </Field>
        <Field name="Featured Collection / New Arrivals">Section labels and headings, plus the featured 5 (section 6).</Field>
        <Field name="Philosophy / Story">Heading, paragraphs (one item = one paragraph, up to 6) and attribution.</Field>
        <Field name="Values Grid">Up to 4 value cards, each with a number, title and text.</Field>
        <Field name="Bespoke Section">The custom-commission section heading and two paragraphs.</Field>
        <Field name="Editorial Quote">The large quote. Write the text before the gold word, then the gold word.</Field>
        <Field name="CTA Band">The “Looking for something in particular?” section near the bottom.</Field>
        <Field name="Trust Badges">Up to 4 badges (title + subtitle). The icons are fixed and cannot be changed here.</Field>
        <Field name="About Page">The three photos on the About page (hero, mission, studio).</Field>
        <Field name="Contact Settings">
          The email and WhatsApp/phone number used across the site and in enquiry buttons. Always include the
          country code, e.g. <code>+91 63537 26302</code>.
        </Field>
        <Note>
          The “accent word” fields hold the single word shown in gold italics. Keep it to one word for the
          best look.
        </Note>
      </Stack>
    ),
  },
  {
    id: 'remove',
    title: '8. Hiding or deleting a product',
    body: (
      <Stack space={4}>
        <Bullets
          items={[
            <>
              <b>Hide temporarily:</b> open the product, use the <b>⋯</b> menu next to Publish → <b>Unpublish</b>.
              It stays in the Studio as a draft and you can publish it again any time.
            </>,
            <>
              <b>Delete permanently:</b> <b>⋯</b> menu → <b>Delete</b>. First remove the product from{' '}
              <b>Featured Products Selection</b> in Site Settings. The Studio will warn you if it is still
              used there.
            </>,
            'Either way, the product’s own page disappears after the next deploy.',
          ]}
        />
      </Stack>
    ),
  },
  {
    id: 'troubleshooting',
    title: '9. Troubleshooting',
    body: (
      <Stack space={4}>
        <Field name="I published but the website looks the same">
          Check which page it is (section 2). For the homepage, wait a minute and hard-refresh (Ctrl+Shift+R on
          Windows, Cmd+Shift+R on Mac). For other pages, a deploy is needed.
        </Field>
        <Field name="The Publish button is greyed out">
          A required field is empty or invalid. Look for red warning icons. They show exactly which field
          needs attention.
        </Field>
        <Field name="An image looks blank on the website">
          Re-upload the image as PNG or JPG and Publish. If it still fails, send the product name to your
          developer.
        </Field>
        <Field name="Someone else is editing the same document">
          Their avatar appears at the top. Changes merge live, but avoid editing the same field at the same time.
        </Field>
        <Field name="I can’t sign in">
          Use the same login method (Google, GitHub or email) you were invited with. Ask your developer to
          re-send the invite if needed.
        </Field>
      </Stack>
    ),
  },
  {
    id: 'checklist',
    title: '10. Quick checklist before publishing a product',
    body: (
      <Stack space={3}>
        {[
          'Title split correctly (gold word in Title Accent)',
          'Slug generated, lowercase, no spaces',
          'SKU and Number (Nº 0XX) filled',
          'Description and dimensions filled',
          'Media Source = Upload directly to CMS, image uploaded (full artwork visible)',
          'New Arrival / Featured set as intended',
          'Published, then deploy requested for new products',
        ].map((item) => (
          <Flex key={item} gap={3} align="center">
            <Text size={2}>☐</Text>
            <Text size={2}>{item}</Text>
          </Flex>
        ))}
      </Stack>
    ),
  },
]

export function GuideTool() {
  return (
    <Card height="fill" overflow="auto" tone="default">
      <Container width={2} paddingX={4} paddingY={6}>
        <Stack space={6}>
          <Stack space={4}>
            <Flex gap={2}>
              <Badge tone="primary">Admin only</Badge>
            </Flex>
            <Heading size={4}>Wallantq Studio — How to use the admin panel</Heading>
            <P>
              A complete guide to managing products and website content. Use the contents below to jump to a
              section.
            </P>
          </Stack>

          <Card padding={4} radius={2} border>
            <Stack space={3}>
              <Text size={1} weight="semibold" muted>
                CONTENTS
              </Text>
              {SECTIONS.map((s) => (
                <Text key={s.id} size={2}>
                  <a href={`#${s.id}`} onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(s.id)?.scrollIntoView({behavior: 'smooth'})
                  }}>
                    {s.title}
                  </a>
                </Text>
              ))}
            </Stack>
          </Card>

          {SECTIONS.map((s) => (
            <Stack key={s.id} space={4} id={s.id}>
              <Heading as="h2" size={2}>
                {s.title}
              </Heading>
              {s.body}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Card>
  )
}
