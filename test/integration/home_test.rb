# frozen_string_literal: true

require "test_helper"

class HomeTest < ActionDispatch::IntegrationTest
  test "the truth" do
    assert true
  end

  test "can see the landing page" do
    get "/"
    assert_select "h1", "Getting things done! That's what matters!"
  end
end
