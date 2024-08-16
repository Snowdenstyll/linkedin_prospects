module Products
  class ShowComponent < ReactComponent
    def initialize(product)
      super("Product", raw_props: product)
    end

    def props
      raw_props.merge(
        price: helpers.number_to_currency(raw_props[:price])
      )
    end
  end
end
